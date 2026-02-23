# `dataCloudflareDnsZoneTransfersPeers` Submodule <a name="`dataCloudflareDnsZoneTransfersPeers` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersPeers <a name="DataCloudflareDnsZoneTransfersPeers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_peers cloudflare_dns_zone_transfers_peers}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

new dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersPeersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig">DataCloudflareDnsZoneTransfersPeersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig">DataCloudflareDnsZoneTransfersPeersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersPeers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isConstruct"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformElement"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersPeers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersPeers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersPeers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_peers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersPeers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList">DataCloudflareDnsZoneTransfersPeersResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.result"></a>

```typescript
public readonly result: DataCloudflareDnsZoneTransfersPeersResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList">DataCloudflareDnsZoneTransfersPeersResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersPeersConfig <a name="DataCloudflareDnsZoneTransfersPeersConfig" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

const dataCloudflareDnsZoneTransfersPeersConfig: dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_peers#account_id DataCloudflareDnsZoneTransfersPeers#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_peers#account_id DataCloudflareDnsZoneTransfersPeers#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_peers#max_items DataCloudflareDnsZoneTransfersPeers#max_items}

---

### DataCloudflareDnsZoneTransfersPeersResult <a name="DataCloudflareDnsZoneTransfersPeersResult" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResult.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

const dataCloudflareDnsZoneTransfersPeersResult: dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDnsZoneTransfersPeersResultList <a name="DataCloudflareDnsZoneTransfersPeersResultList" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

new dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.get"></a>

```typescript
public get(index: number): DataCloudflareDnsZoneTransfersPeersResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareDnsZoneTransfersPeersResultOutputReference <a name="DataCloudflareDnsZoneTransfersPeersResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersPeers } from '@cdktn/provider-cloudflare'

new dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.ixfrEnable">ixfrEnable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.tsigId">tsigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResult">DataCloudflareDnsZoneTransfersPeersResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `ixfrEnable`<sup>Required</sup> <a name="ixfrEnable" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.ixfrEnable"></a>

```typescript
public readonly ixfrEnable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigId`<sup>Required</sup> <a name="tsigId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.tsigId"></a>

```typescript
public readonly tsigId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareDnsZoneTransfersPeersResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersPeers.DataCloudflareDnsZoneTransfersPeersResult">DataCloudflareDnsZoneTransfersPeersResult</a>

---



