import { copy, copyFile } from 'fs-extra'
import { build as esbuild } from 'esbuild'
import path, { join, resolve } from 'path'
import esbuildConfig from './esbuild.config'
import { resolveKoffiBinary } from './build/koffi'

async function main() {
  await esbuild({
    ...esbuildConfig,
    outdir: resolve(__dirname, './dist'),
    entryPoints: [path.join(__dirname, './main/index.ts')],
  })
  const targetArch = 'x64'
  const msalRuntimeDir = path.dirname(require.resolve('@azure/msal-node-runtime/package.json'))
  const source = join(msalRuntimeDir, 'dist', 'windows', 'x64')
  await Promise.all([
    copyFile(join(source, 'msal-node-runtime.node'), join(__dirname, 'dist', `msal-node-runtime-${targetArch}.node`)),
    copyFile(join(source, 'msalruntime.dll'), join(__dirname, 'dist', `msalruntime-${targetArch}.dll`)),
  ])
  await copyFile(await resolveKoffiBinary('win32', 'x64'), join(__dirname, 'dist', 'koffi.node'))
  await copy(path.join(__dirname, '../xmcl-keystone-ui/dist'), path.join(__dirname, './dist/renderer'))
  console.log('main process built for win32-x64')
}
main().catch((e) => { console.error(e); process.exit(1) })
