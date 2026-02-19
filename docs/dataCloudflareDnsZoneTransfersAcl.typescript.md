# `dataCloudflareDnsZoneTransfersAcl` Submodule <a name="`dataCloudflareDnsZoneTransfersAcl` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDnsZoneTransfersAcl <a name="DataCloudflareDnsZoneTransfersAcl" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_acl cloudflare_dns_zone_transfers_acl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersAcl } from '@cdktn/provider-cloudflare'

new dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl(scope: Construct, id: string, config: DataCloudflareDnsZoneTransfersAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig">DataCloudflareDnsZoneTransfersAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig">DataCloudflareDnsZoneTransfersAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersAcl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isConstruct"></a>

```typescript
import { dataCloudflareDnsZoneTransfersAcl } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformElement"></a>

```typescript
import { dataCloudflareDnsZoneTransfersAcl } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDnsZoneTransfersAcl } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport"></a>

```typescript
import { dataCloudflareDnsZoneTransfersAcl } from '@cdktn/provider-cloudflare'

dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareDnsZoneTransfersAcl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDnsZoneTransfersAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDnsZoneTransfersAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDnsZoneTransfersAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.ipRange">ipRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.aclIdInput">aclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.aclId">aclId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipRange`<sup>Required</sup> <a name="ipRange" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.ipRange"></a>

```typescript
public readonly ipRange: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `aclIdInput`<sup>Optional</sup> <a name="aclIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.aclIdInput"></a>

```typescript
public readonly aclIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDnsZoneTransfersAclConfig <a name="DataCloudflareDnsZoneTransfersAclConfig" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.Initializer"></a>

```typescript
import { dataCloudflareDnsZoneTransfersAcl } from '@cdktn/provider-cloudflare'

const dataCloudflareDnsZoneTransfersAclConfig: dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_acl#account_id DataCloudflareDnsZoneTransfersAcl#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.aclId">aclId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_acl#acl_id DataCloudflareDnsZoneTransfersAcl#acl_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_acl#account_id DataCloudflareDnsZoneTransfersAcl#account_id}.

---

##### `aclId`<sup>Required</sup> <a name="aclId" id="@cdktn/provider-cloudflare.dataCloudflareDnsZoneTransfersAcl.DataCloudflareDnsZoneTransfersAclConfig.property.aclId"></a>

```typescript
public readonly aclId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/dns_zone_transfers_acl#acl_id DataCloudflareDnsZoneTransfersAcl#acl_id}.

---



