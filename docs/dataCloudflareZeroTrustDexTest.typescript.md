# `dataCloudflareZeroTrustDexTest` Submodule <a name="`dataCloudflareZeroTrustDexTest` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDexTest <a name="DataCloudflareZeroTrustDexTest" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test cloudflare_zero_trust_dex_test}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest(scope: Construct, id: string, config: DataCloudflareZeroTrustDexTestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig">DataCloudflareZeroTrustDexTestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig">DataCloudflareZeroTrustDexTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.putTargetPolicies">putTargetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetDexTestId">resetDexTestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetTargetPolicies">resetTargetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustDexTestFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a>

---

##### `putTargetPolicies` <a name="putTargetPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.putTargetPolicies"></a>

```typescript
public putTargetPolicies(value: IResolvable | DataCloudflareZeroTrustDexTestTargetPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.putTargetPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]

---

##### `resetDexTestId` <a name="resetDexTestId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetDexTestId"></a>

```typescript
public resetDexTestId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetTargetPolicies` <a name="resetTargetPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.resetTargetPolicies"></a>

```typescript
public resetTargetPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustDexTest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustDexTest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustDexTest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustDexTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDexTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.data">data</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference">DataCloudflareZeroTrustDexTestDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference">DataCloudflareZeroTrustDexTestFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.targeted">targeted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.targetPolicies">targetPolicies</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList">DataCloudflareZeroTrustDexTestTargetPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.testId">testId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.dexTestIdInput">dexTestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.targetPoliciesInput">targetPoliciesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.dexTestId">dexTestId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.data"></a>

```typescript
public readonly data: DataCloudflareZeroTrustDexTestDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference">DataCloudflareZeroTrustDexTestDataOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustDexTestFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference">DataCloudflareZeroTrustDexTestFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targeted`<sup>Required</sup> <a name="targeted" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.targeted"></a>

```typescript
public readonly targeted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `targetPolicies`<sup>Required</sup> <a name="targetPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.targetPolicies"></a>

```typescript
public readonly targetPolicies: DataCloudflareZeroTrustDexTestTargetPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList">DataCloudflareZeroTrustDexTestTargetPoliciesList</a>

---

##### `testId`<sup>Required</sup> <a name="testId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.testId"></a>

```typescript
public readonly testId: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `dexTestIdInput`<sup>Optional</sup> <a name="dexTestIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.dexTestIdInput"></a>

```typescript
public readonly dexTestIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustDexTestFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a>

---

##### `targetPoliciesInput`<sup>Optional</sup> <a name="targetPoliciesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.targetPoliciesInput"></a>

```typescript
public readonly targetPoliciesInput: IResolvable | DataCloudflareZeroTrustDexTestTargetPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `dexTestId`<sup>Required</sup> <a name="dexTestId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.dexTestId"></a>

```typescript
public readonly dexTestId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDexTestConfig <a name="DataCloudflareZeroTrustDexTestConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDexTestConfig: dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#account_id DataCloudflareZeroTrustDexTest#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.dexTestId">dexTestId</a></code> | <code>string</code> | The unique identifier for the test. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#filter DataCloudflareZeroTrustDexTest#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.targetPolicies">targetPolicies</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]</code> | DEX rules targeted by this test. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#account_id DataCloudflareZeroTrustDexTest#account_id}.

---

##### `dexTestId`<sup>Optional</sup> <a name="dexTestId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.dexTestId"></a>

```typescript
public readonly dexTestId: string;
```

- *Type:* string

The unique identifier for the test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#dex_test_id DataCloudflareZeroTrustDexTest#dex_test_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustDexTestFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#filter DataCloudflareZeroTrustDexTest#filter}.

---

##### `targetPolicies`<sup>Optional</sup> <a name="targetPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestConfig.property.targetPolicies"></a>

```typescript
public readonly targetPolicies: IResolvable | DataCloudflareZeroTrustDexTestTargetPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]

DEX rules targeted by this test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#target_policies DataCloudflareZeroTrustDexTest#target_policies}

---

### DataCloudflareZeroTrustDexTestData <a name="DataCloudflareZeroTrustDexTestData" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestData.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDexTestData: dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestData = { ... }
```


### DataCloudflareZeroTrustDexTestFilter <a name="DataCloudflareZeroTrustDexTestFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDexTestFilter: dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter.property.kind">kind</a></code> | <code>string</code> | Filter by test type Available values: "http", "traceroute". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter.property.testName">testName</a></code> | <code>string</code> | Filter by test name. |

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Filter by test type Available values: "http", "traceroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#kind DataCloudflareZeroTrustDexTest#kind}

---

##### `testName`<sup>Optional</sup> <a name="testName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter.property.testName"></a>

```typescript
public readonly testName: string;
```

- *Type:* string

Filter by test name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/zero_trust_dex_test#test_name DataCloudflareZeroTrustDexTest#test_name}

---

### DataCloudflareZeroTrustDexTestTargetPolicies <a name="DataCloudflareZeroTrustDexTestTargetPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustDexTestTargetPolicies: dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDexTestDataOutputReference <a name="DataCloudflareZeroTrustDexTestDataOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestData">DataCloudflareZeroTrustDexTestData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustDexTestData;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestData">DataCloudflareZeroTrustDexTestData</a>

---


### DataCloudflareZeroTrustDexTestFilterOutputReference <a name="DataCloudflareZeroTrustDexTestFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resetTestName">resetTestName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKind` <a name="resetKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetTestName` <a name="resetTestName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.resetTestName"></a>

```typescript
public resetTestName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.testNameInput">testNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.testName">testName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `testNameInput`<sup>Optional</sup> <a name="testNameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.testNameInput"></a>

```typescript
public readonly testNameInput: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `testName`<sup>Required</sup> <a name="testName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.testName"></a>

```typescript
public readonly testName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustDexTestFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestFilter">DataCloudflareZeroTrustDexTestFilter</a>

---


### DataCloudflareZeroTrustDexTestTargetPoliciesList <a name="DataCloudflareZeroTrustDexTestTargetPoliciesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.get"></a>

```typescript
public get(index: number): DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustDexTestTargetPolicies[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>[]

---


### DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference <a name="DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustDexTest } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.default">default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.default"></a>

```typescript
public readonly default: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustDexTestTargetPolicies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustDexTest.DataCloudflareZeroTrustDexTestTargetPolicies">DataCloudflareZeroTrustDexTestTargetPolicies</a>

---



