# `dataCloudflareZeroTrustDeviceDefaultProfile` Submodule <a name="`dataCloudflareZeroTrustDeviceDefaultProfile` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceDefaultProfile <a name="DataCloudflareZeroTrustDeviceDefaultProfile" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_device_default_profile cloudflare_zero_trust_device_default_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceDefaultProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig">DataCloudflareZeroTrustDeviceDefaultProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig">DataCloudflareZeroTrustDeviceDefaultProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDefaultProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceDefaultProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceDefaultProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceDefaultProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_device_default_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceDefaultProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowUpdates">allowUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.autoConnect">autoConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.captivePortal">captivePortal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList">DataCloudflareZeroTrustDeviceDefaultProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.include">include</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList">DataCloudflareZeroTrustDeviceDefaultProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.switchLocked">switchLocked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.exclude"></a>

```typescript
public readonly exclude: DataCloudflareZeroTrustDeviceDefaultProfileExcludeList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList">DataCloudflareZeroTrustDeviceDefaultProfileExcludeList</a>

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.fallbackDomains"></a>

```typescript
public readonly fallbackDomains: DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.gatewayUniqueId"></a>

```typescript
public readonly gatewayUniqueId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.include"></a>

```typescript
public readonly include: DataCloudflareZeroTrustDeviceDefaultProfileIncludeList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList">DataCloudflareZeroTrustDeviceDefaultProfileIncludeList</a>

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.registerInterfaceIpWithDns"></a>

```typescript
public readonly registerInterfaceIpWithDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sccmVpnBoundarySupport`<sup>Required</sup> <a name="sccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.sccmVpnBoundarySupport"></a>

```typescript
public readonly sccmVpnBoundarySupport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.serviceModeV2"></a>

```typescript
public readonly serviceModeV2: DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference</a>

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.switchLocked"></a>

```typescript
public readonly switchLocked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceDefaultProfileConfig <a name="DataCloudflareZeroTrustDeviceDefaultProfileConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDefaultProfileConfig: dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_device_default_profile#account_id DataCloudflareZeroTrustDeviceDefaultProfile#account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_device_default_profile#account_id DataCloudflareZeroTrustDeviceDefaultProfile#account_id}.

---

### DataCloudflareZeroTrustDeviceDefaultProfileExclude <a name="DataCloudflareZeroTrustDeviceDefaultProfileExclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDefaultProfileExclude: dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude = { ... }
```


### DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains <a name="DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains: dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains = { ... }
```


### DataCloudflareZeroTrustDeviceDefaultProfileInclude <a name="DataCloudflareZeroTrustDeviceDefaultProfileInclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDefaultProfileInclude: dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude = { ... }
```


### DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 <a name="DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2: dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2 = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceDefaultProfileExcludeList <a name="DataCloudflareZeroTrustDeviceDefaultProfileExcludeList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude">DataCloudflareZeroTrustDeviceDefaultProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDefaultProfileExclude;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileExclude">DataCloudflareZeroTrustDeviceDefaultProfileExclude</a>

---


### DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains">DataCloudflareZeroTrustDeviceDefaultProfileFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceDefaultProfileIncludeList <a name="DataCloudflareZeroTrustDeviceDefaultProfileIncludeList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude">DataCloudflareZeroTrustDeviceDefaultProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDefaultProfileInclude;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileInclude">DataCloudflareZeroTrustDeviceDefaultProfileInclude</a>

---


### DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceDefaultProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceDefaultProfile.DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2">DataCloudflareZeroTrustDeviceDefaultProfileServiceModeV2</a>

---



