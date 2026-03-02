# `dataCloudflareZeroTrustDeviceCustomProfile` Submodule <a name="`dataCloudflareZeroTrustDeviceCustomProfile` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceCustomProfile <a name="DataCloudflareZeroTrustDeviceCustomProfile" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile(scope: Construct, id: string, config: DataCloudflareZeroTrustDeviceCustomProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig">DataCloudflareZeroTrustDeviceCustomProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig">DataCloudflareZeroTrustDeviceCustomProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceCustomProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceCustomProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowedToLeave">allowedToLeave</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowModeSwitch">allowModeSwitch</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowUpdates">allowUpdates</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.autoConnect">autoConnect</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.captivePortal">captivePortal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.disableAutoFallback">disableAutoFallback</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList">DataCloudflareZeroTrustDeviceCustomProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.excludeOfficeIps">excludeOfficeIps</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fallbackDomains">fallbackDomains</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.gatewayUniqueId">gatewayUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.include">include</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList">DataCloudflareZeroTrustDeviceCustomProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowMinutes">lanAllowMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize">lanAllowSubnetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns">registerInterfaceIpWithDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupport">sccmVpnBoundarySupport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.serviceModeV2">serviceModeV2</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.supportUrl">supportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.switchLocked">switchLocked</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.targetTests">targetTests</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tunnelProtocol">tunnelProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allowedToLeave`<sup>Required</sup> <a name="allowedToLeave" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowedToLeave"></a>

```typescript
public readonly allowedToLeave: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowModeSwitch`<sup>Required</sup> <a name="allowModeSwitch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowModeSwitch"></a>

```typescript
public readonly allowModeSwitch: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `allowUpdates`<sup>Required</sup> <a name="allowUpdates" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.allowUpdates"></a>

```typescript
public readonly allowUpdates: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoConnect`<sup>Required</sup> <a name="autoConnect" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.autoConnect"></a>

```typescript
public readonly autoConnect: number;
```

- *Type:* number

---

##### `captivePortal`<sup>Required</sup> <a name="captivePortal" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.captivePortal"></a>

```typescript
public readonly captivePortal: number;
```

- *Type:* number

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableAutoFallback`<sup>Required</sup> <a name="disableAutoFallback" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.disableAutoFallback"></a>

```typescript
public readonly disableAutoFallback: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.exclude"></a>

```typescript
public readonly exclude: DataCloudflareZeroTrustDeviceCustomProfileExcludeList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList">DataCloudflareZeroTrustDeviceCustomProfileExcludeList</a>

---

##### `excludeOfficeIps`<sup>Required</sup> <a name="excludeOfficeIps" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.excludeOfficeIps"></a>

```typescript
public readonly excludeOfficeIps: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fallbackDomains`<sup>Required</sup> <a name="fallbackDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.fallbackDomains"></a>

```typescript
public readonly fallbackDomains: DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList</a>

---

##### `gatewayUniqueId`<sup>Required</sup> <a name="gatewayUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.gatewayUniqueId"></a>

```typescript
public readonly gatewayUniqueId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.include"></a>

```typescript
public readonly include: DataCloudflareZeroTrustDeviceCustomProfileIncludeList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList">DataCloudflareZeroTrustDeviceCustomProfileIncludeList</a>

---

##### `lanAllowMinutes`<sup>Required</sup> <a name="lanAllowMinutes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowMinutes"></a>

```typescript
public readonly lanAllowMinutes: number;
```

- *Type:* number

---

##### `lanAllowSubnetSize`<sup>Required</sup> <a name="lanAllowSubnetSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize"></a>

```typescript
public readonly lanAllowSubnetSize: number;
```

- *Type:* number

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `registerInterfaceIpWithDns`<sup>Required</sup> <a name="registerInterfaceIpWithDns" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns"></a>

```typescript
public readonly registerInterfaceIpWithDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sccmVpnBoundarySupport`<sup>Required</sup> <a name="sccmVpnBoundarySupport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupport"></a>

```typescript
public readonly sccmVpnBoundarySupport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serviceModeV2`<sup>Required</sup> <a name="serviceModeV2" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.serviceModeV2"></a>

```typescript
public readonly serviceModeV2: DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a>

---

##### `supportUrl`<sup>Required</sup> <a name="supportUrl" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.supportUrl"></a>

```typescript
public readonly supportUrl: string;
```

- *Type:* string

---

##### `switchLocked`<sup>Required</sup> <a name="switchLocked" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.switchLocked"></a>

```typescript
public readonly switchLocked: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `targetTests`<sup>Required</sup> <a name="targetTests" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.targetTests"></a>

```typescript
public readonly targetTests: DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList">DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList</a>

---

##### `tunnelProtocol`<sup>Required</sup> <a name="tunnelProtocol" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tunnelProtocol"></a>

```typescript
public readonly tunnelProtocol: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceCustomProfileConfig <a name="DataCloudflareZeroTrustDeviceCustomProfileConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfileConfig: dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_device_custom_profile#account_id DataCloudflareZeroTrustDeviceCustomProfile#account_id}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_device_custom_profile#policy_id DataCloudflareZeroTrustDeviceCustomProfile#policy_id}.

---

### DataCloudflareZeroTrustDeviceCustomProfileExclude <a name="DataCloudflareZeroTrustDeviceCustomProfileExclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfileExclude: dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfileFallbackDomains: dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfileInclude <a name="DataCloudflareZeroTrustDeviceCustomProfileInclude" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfileInclude: dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 <a name="DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfileServiceModeV2: dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2 = { ... }
```


### DataCloudflareZeroTrustDeviceCustomProfileTargetTests <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTests" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceCustomProfileTargetTests: dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceCustomProfileExcludeList <a name="DataCloudflareZeroTrustDeviceCustomProfileExcludeList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude">DataCloudflareZeroTrustDeviceCustomProfileExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfileExclude;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileExclude">DataCloudflareZeroTrustDeviceCustomProfileExclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer">dnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsServer`<sup>Required</sup> <a name="dnsServer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```typescript
public readonly dnsServer: string[];
```

- *Type:* string[]

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains">DataCloudflareZeroTrustDeviceCustomProfileFallbackDomains</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileIncludeList <a name="DataCloudflareZeroTrustDeviceCustomProfileIncludeList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude">DataCloudflareZeroTrustDeviceCustomProfileInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfileInclude;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileInclude">DataCloudflareZeroTrustDeviceCustomProfileInclude</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2">DataCloudflareZeroTrustDeviceCustomProfileServiceModeV2</a>

---


### DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference <a name="DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceCustomProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests">DataCloudflareZeroTrustDeviceCustomProfileTargetTests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceCustomProfileTargetTests;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceCustomProfile.DataCloudflareZeroTrustDeviceCustomProfileTargetTests">DataCloudflareZeroTrustDeviceCustomProfileTargetTests</a>

---



