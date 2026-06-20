# `dataCloudflareZeroTrustDlpSensitivityGroups` Submodule <a name="`dataCloudflareZeroTrustDlpSensitivityGroups` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpSensitivityGroups <a name="DataCloudflareZeroTrustDlpSensitivityGroups" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_groups cloudflare_zero_trust_dlp_sensitivity_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpSensitivityGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig">DataCloudflareZeroTrustDlpSensitivityGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig">DataCloudflareZeroTrustDlpSensitivityGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpSensitivityGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpSensitivityGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpSensitivityGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpSensitivityGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpSensitivityGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList">DataCloudflareZeroTrustDlpSensitivityGroupsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDlpSensitivityGroupsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList">DataCloudflareZeroTrustDlpSensitivityGroupsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpSensitivityGroupsConfig <a name="DataCloudflareZeroTrustDlpSensitivityGroupsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpSensitivityGroupsConfig: dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_groups#account_id DataCloudflareZeroTrustDlpSensitivityGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_groups#account_id DataCloudflareZeroTrustDlpSensitivityGroups#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_dlp_sensitivity_groups#max_items DataCloudflareZeroTrustDlpSensitivityGroups#max_items}

---

### DataCloudflareZeroTrustDlpSensitivityGroupsResult <a name="DataCloudflareZeroTrustDlpSensitivityGroupsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpSensitivityGroupsResult: dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResult = { ... }
```


### DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels <a name="DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpSensitivityGroupsResultLevels: dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList <a name="DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference <a name="DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels">DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels">DataCloudflareZeroTrustDlpSensitivityGroupsResultLevels</a>

---


### DataCloudflareZeroTrustDlpSensitivityGroupsResultList <a name="DataCloudflareZeroTrustDlpSensitivityGroupsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference <a name="DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpSensitivityGroups } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.levels">levels</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList">DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResult">DataCloudflareZeroTrustDlpSensitivityGroupsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `levels`<sup>Required</sup> <a name="levels" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.levels"></a>

```typescript
public readonly levels: DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList">DataCloudflareZeroTrustDlpSensitivityGroupsResultLevelsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpSensitivityGroupsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpSensitivityGroups.DataCloudflareZeroTrustDlpSensitivityGroupsResult">DataCloudflareZeroTrustDlpSensitivityGroupsResult</a>

---



