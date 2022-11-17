/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AAAARecord } from './AAAARecord';
import type { ARecord } from './ARecord';
import type { CERTRecord } from './CERTRecord';
import type { CNAMERecord } from './CNAMERecord';
import type { DNSKEYRecord } from './DNSKEYRecord';
import type { DSRecord } from './DSRecord';
import type { HTTPSRecord } from './HTTPSRecord';
import type { LOCRecord } from './LOCRecord';
import type { MXRecord } from './MXRecord';
import type { NAPTRRecord } from './NAPTRRecord';
import type { NSRecord } from './NSRecord';
import type { SMIMEARecord } from './SMIMEARecord';
import type { SRVRecord } from './SRVRecord';
import type { SSHFPRecord } from './SSHFPRecord';
import type { SVCBRecord } from './SVCBRecord';
import type { TLSARecord } from './TLSARecord';
import type { TXTRecord } from './TXTRecord';
import type { URIRecord } from './URIRecord';

export type dns_record = (ARecord | AAAARecord | CNAMERecord | HTTPSRecord | NSRecord | MXRecord | TXTRecord | LOCRecord | SRVRecord | CERTRecord | DNSKEYRecord | DSRecord | NAPTRRecord | SMIMEARecord | SSHFPRecord | SVCBRecord | TLSARecord | URIRecord);

