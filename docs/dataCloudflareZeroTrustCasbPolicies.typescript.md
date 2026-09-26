# `dataCloudflareZeroTrustCasbPolicies` Submodule <a name="`dataCloudflareZeroTrustCasbPolicies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbPolicies <a name="DataCloudflareZeroTrustCasbPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/zero_trust_casb_policies cloudflare_zero_trust_casb_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies(scope: Construct, id: string, config: DataCloudflareZeroTrustCasbPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig">DataCloudflareZeroTrustCasbPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig">DataCloudflareZeroTrustCasbPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCasbPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/zero_trust_casb_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList">DataCloudflareZeroTrustCasbPoliciesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.result"></a>

```typescript
public readonly result: DataCloudflareZeroTrustCasbPoliciesResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList">DataCloudflareZeroTrustCasbPoliciesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbPoliciesConfig <a name="DataCloudflareZeroTrustCasbPoliciesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbPoliciesConfig: dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/zero_trust_casb_policies#account_id DataCloudflareZeroTrustCasbPolicies#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/zero_trust_casb_policies#account_id DataCloudflareZeroTrustCasbPolicies#account_id}.

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/zero_trust_casb_policies#max_items DataCloudflareZeroTrustCasbPolicies#max_items}

---

### DataCloudflareZeroTrustCasbPoliciesResult <a name="DataCloudflareZeroTrustCasbPoliciesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResult.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbPoliciesResult: dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResult = { ... }
```


### DataCloudflareZeroTrustCasbPoliciesResultActions <a name="DataCloudflareZeroTrustCasbPoliciesResultActions" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActions.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbPoliciesResultActions: dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActions = { ... }
```


### DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes: dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes = { ... }
```


### DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs: dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.remediationTypes">remediationTypes</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList">DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.webhookConfigs">webhookConfigs</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList">DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActions">DataCloudflareZeroTrustCasbPoliciesResultActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `remediationTypes`<sup>Required</sup> <a name="remediationTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.remediationTypes"></a>

```typescript
public readonly remediationTypes: DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList">DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList</a>

---

##### `webhookConfigs`<sup>Required</sup> <a name="webhookConfigs" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.webhookConfigs"></a>

```typescript
public readonly webhookConfigs: DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList">DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCasbPoliciesResultActions;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActions">DataCloudflareZeroTrustCasbPoliciesResultActions</a>

---


### DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.remediationType">remediationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.remediationTypeId">remediationTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes">DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `remediationType`<sup>Required</sup> <a name="remediationType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.remediationType"></a>

```typescript
public readonly remediationType: string;
```

- *Type:* string

---

##### `remediationTypeId`<sup>Required</sup> <a name="remediationTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.remediationTypeId"></a>

```typescript
public readonly remediationTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes">DataCloudflareZeroTrustCasbPoliciesResultActionsRemediationTypes</a>

---


### DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference <a name="DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.webhookConfigId">webhookConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs">DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `webhookConfigId`<sup>Required</sup> <a name="webhookConfigId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.webhookConfigId"></a>

```typescript
public readonly webhookConfigId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs">DataCloudflareZeroTrustCasbPoliciesResultActionsWebhookConfigs</a>

---


### DataCloudflareZeroTrustCasbPoliciesResultList <a name="DataCloudflareZeroTrustCasbPoliciesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustCasbPoliciesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareZeroTrustCasbPoliciesResultOutputReference <a name="DataCloudflareZeroTrustCasbPoliciesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbPolicies } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference">DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.disabledAt">disabledAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.findingTypeId">findingTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.integrationIds">integrationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.lastTriggeredAt">lastTriggeredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResult">DataCloudflareZeroTrustCasbPoliciesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.actions"></a>

```typescript
public readonly actions: DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference">DataCloudflareZeroTrustCasbPoliciesResultActionsOutputReference</a>

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.appliesToAllIntegrations"></a>

```typescript
public readonly appliesToAllIntegrations: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.disabledAt"></a>

```typescript
public readonly disabledAt: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `findingTypeId`<sup>Required</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.findingTypeId"></a>

```typescript
public readonly findingTypeId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationIds`<sup>Required</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.integrationIds"></a>

```typescript
public readonly integrationIds: string[];
```

- *Type:* string[]

---

##### `lastTriggeredAt`<sup>Required</sup> <a name="lastTriggeredAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.lastTriggeredAt"></a>

```typescript
public readonly lastTriggeredAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCasbPoliciesResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbPolicies.DataCloudflareZeroTrustCasbPoliciesResult">DataCloudflareZeroTrustCasbPoliciesResult</a>

---



