# `dataCloudflareZeroTrustDlpCustomPromptTopics` Submodule <a name="`dataCloudflareZeroTrustDlpCustomPromptTopics` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpCustomPromptTopics <a name="DataCloudflareZeroTrustDlpCustomPromptTopics" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics cloudflare_zero_trust_dlp_custom_prompt_topics}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics(scope: Construct, id: string, config: DataCloudflareZeroTrustDlpCustomPromptTopicsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig">DataCloudflareZeroTrustDlpCustomPromptTopicsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig">DataCloudflareZeroTrustDlpCustomPromptTopicsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDlpCustomPromptTopics resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDlpCustomPromptTopics resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDlpCustomPromptTopics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDlpCustomPromptTopics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpCustomPromptTopics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList">DataCloudflareZeroTrustDlpCustomPromptTopicsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustDlpCustomPromptTopicsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList">DataCloudflareZeroTrustDlpCustomPromptTopicsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopics.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpCustomPromptTopicsConfig <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpCustomPromptTopicsConfig: dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#account_id DataCloudflareZeroTrustDlpCustomPromptTopics#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#account_id DataCloudflareZeroTrustDlpCustomPromptTopics#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.24.0/docs/data-sources/zero_trust_dlp_custom_prompt_topics#max_items DataCloudflareZeroTrustDlpCustomPromptTopics#max_items}

---

### DataCloudflareZeroTrustDlpCustomPromptTopicsResult <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDlpCustomPromptTopicsResult: dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpCustomPromptTopicsResultList <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference <a name="DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDlpCustomPromptTopics } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult">DataCloudflareZeroTrustDlpCustomPromptTopicsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDlpCustomPromptTopicsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDlpCustomPromptTopics.DataCloudflareZeroTrustDlpCustomPromptTopicsResult">DataCloudflareZeroTrustDlpCustomPromptTopicsResult</a>

---



