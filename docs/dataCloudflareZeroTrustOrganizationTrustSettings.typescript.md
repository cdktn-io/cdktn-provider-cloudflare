# `dataCloudflareZeroTrustOrganizationTrustSettings` Submodule <a name="`dataCloudflareZeroTrustOrganizationTrustSettings` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustOrganizationTrustSettings <a name="DataCloudflareZeroTrustOrganizationTrustSettings" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_organization_trust_settings cloudflare_zero_trust_organization_trust_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustOrganizationTrustSettings } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings(scope: Construct, id: string, config: DataCloudflareZeroTrustOrganizationTrustSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig">DataCloudflareZeroTrustOrganizationTrustSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig">DataCloudflareZeroTrustOrganizationTrustSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustOrganizationTrustSettings } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustOrganizationTrustSettings } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustOrganizationTrustSettings } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustOrganizationTrustSettings } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustOrganizationTrustSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustOrganizationTrustSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_organization_trust_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustOrganizationTrustSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg">grantTrustToAllAccountsInOrg</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.trustingAccounts">trustingAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `grantTrustToAllAccountsInOrg`<sup>Required</sup> <a name="grantTrustToAllAccountsInOrg" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg"></a>

```typescript
public readonly grantTrustToAllAccountsInOrg: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `trustingAccounts`<sup>Required</sup> <a name="trustingAccounts" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.trustingAccounts"></a>

```typescript
public readonly trustingAccounts: string[];
```

- *Type:* string[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustOrganizationTrustSettingsConfig <a name="DataCloudflareZeroTrustOrganizationTrustSettingsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustOrganizationTrustSettings } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustOrganizationTrustSettingsConfig: dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustOrganizationTrustSettings.DataCloudflareZeroTrustOrganizationTrustSettingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_organization_trust_settings#account_id DataCloudflareZeroTrustOrganizationTrustSettings#account_id}

---



