# `dataCloudflareZeroTrustDeviceIpProfiles` Submodule <a name="`dataCloudflareZeroTrustDeviceIpProfiles` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDeviceIpProfiles <a name="DataCloudflareZeroTrustDeviceIpProfiles" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_ip_profiles cloudflare_zero_trust_device_ip_profiles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles(scope: Construct, id: string, config?: DataCloudflareZeroTrustDeviceIpProfilesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig">DataCloudflareZeroTrustDeviceIpProfilesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig">DataCloudflareZeroTrustDeviceIpProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetPerPage">resetPerPage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

##### `resetPerPage` <a name="resetPerPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.resetPerPage"></a>

```typescript
public resetPerPage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceIpProfiles resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDeviceIpProfiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDeviceIpProfiles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDeviceIpProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_ip_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDeviceIpProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList">DataCloudflareZeroTrustDeviceIpProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.perPageInput">perPageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.perPage">perPage</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDeviceIpProfilesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList">DataCloudflareZeroTrustDeviceIpProfilesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `perPageInput`<sup>Optional</sup> <a name="perPageInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.perPageInput"></a>

```typescript
public readonly perPageInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

##### `perPage`<sup>Required</sup> <a name="perPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfiles.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDeviceIpProfilesConfig <a name="DataCloudflareZeroTrustDeviceIpProfilesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceIpProfilesConfig: dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_ip_profiles#account_id DataCloudflareZeroTrustDeviceIpProfiles#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.perPage">perPage</a></code> | <code>number</code> | The number of IP profiles to return per page. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_ip_profiles#account_id DataCloudflareZeroTrustDeviceIpProfiles#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_ip_profiles#max_items DataCloudflareZeroTrustDeviceIpProfiles#max_items}

---

##### `perPage`<sup>Optional</sup> <a name="perPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesConfig.property.perPage"></a>

```typescript
public readonly perPage: number;
```

- *Type:* number

The number of IP profiles to return per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/zero_trust_device_ip_profiles#per_page DataCloudflareZeroTrustDeviceIpProfiles#per_page}

---

### DataCloudflareZeroTrustDeviceIpProfilesResult <a name="DataCloudflareZeroTrustDeviceIpProfilesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDeviceIpProfilesResult: dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDeviceIpProfilesResultList <a name="DataCloudflareZeroTrustDeviceIpProfilesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference <a name="DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDeviceIpProfiles } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.precedence">precedence</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResult">DataCloudflareZeroTrustDeviceIpProfilesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `precedence`<sup>Required</sup> <a name="precedence" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.precedence"></a>

```typescript
public readonly precedence: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDeviceIpProfilesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDeviceIpProfiles.DataCloudflareZeroTrustDeviceIpProfilesResult">DataCloudflareZeroTrustDeviceIpProfilesResult</a>

---



