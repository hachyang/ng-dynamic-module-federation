import { Injectable } from '@angular/core';
import { PluginOptions } from './plugin';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://192.168.0.20:3000/remoteEntry.js',
                remoteName: 'sensor1',
                exposedModule: './Module',

                displayName: 'LDO1',
                componentName: 'DeviceComponent'
            },
            {
                remoteEntry: 'http://192.168.0.20:3000/remoteEntry.js',
                remoteName: 'sensor1',
                exposedModule: './Upload',

                displayName: 'Upload',
                componentName: 'UploadComponent'
            },
            {
                remoteEntry: 'http://192.168.0.20:3001/remoteEntry.js',
                remoteName: 'sensor2',
                exposedModule: './Module',

                displayName: 'LDO2',
                componentName: 'DeviceComponent'
            },
            {
                remoteEntry: 'http://192.168.0.20:3001/remoteEntry.js',
                remoteName: 'sensor2',
                exposedModule: './Enrich',

                displayName: 'Enrich',
                componentName: 'EnrichComponent'
            }
        ] as PluginOptions[]);
    }
}
