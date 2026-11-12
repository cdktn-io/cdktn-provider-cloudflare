# `dataCloudflareZeroTrustCwsRegoModule` Submodule <a name="`dataCloudflareZeroTrustCwsRegoModule` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsRegoModule <a name="DataCloudflareZeroTrustCwsRegoModule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module cloudflare_zero_trust_cws_rego_module}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsRegoModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig">DataCloudflareZeroTrustCwsRegoModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig">DataCloudflareZeroTrustCwsRegoModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetRegoModuleId">resetRegoModuleId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustCwsRegoModuleFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRegoModuleId` <a name="resetRegoModuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.resetRegoModuleId"></a>

```typescript
public resetRegoModuleId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoModule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsRegoModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsRegoModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsRegoModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference">DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.packagePath">packagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoSource">regoSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleIdInput">regoModuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleId">regoModuleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference">DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.packagePath"></a>

```typescript
public readonly packagePath: string;
```

- *Type:* string

---

##### `regoSource`<sup>Required</sup> <a name="regoSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoSource"></a>

```typescript
public readonly regoSource: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustCwsRegoModuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

---

##### `regoModuleIdInput`<sup>Optional</sup> <a name="regoModuleIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleIdInput"></a>

```typescript
public readonly regoModuleIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `regoModuleId`<sup>Required</sup> <a name="regoModuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.regoModuleId"></a>

```typescript
public readonly regoModuleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsRegoModuleConfig <a name="DataCloudflareZeroTrustCwsRegoModuleConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsRegoModuleConfig: dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#filter DataCloudflareZeroTrustCwsRegoModule#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.regoModuleId">regoModuleId</a></code> | <code>string</code> | ID of the Rego module to retrieve. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#account_id DataCloudflareZeroTrustCwsRegoModule#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsRegoModuleFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#filter DataCloudflareZeroTrustCwsRegoModule#filter}.

---

##### `regoModuleId`<sup>Optional</sup> <a name="regoModuleId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleConfig.property.regoModuleId"></a>

```typescript
public readonly regoModuleId: string;
```

- *Type:* string

ID of the Rego module to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#rego_module_id DataCloudflareZeroTrustCwsRegoModule#rego_module_id}

---

### DataCloudflareZeroTrustCwsRegoModuleFilter <a name="DataCloudflareZeroTrustCwsRegoModuleFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsRegoModuleFilter: dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.direction">direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.name">name</a></code> | <code>string</code> | Filter by Rego module name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.order">order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.packagePath">packagePath</a></code> | <code>string</code> | Filter by package path (case-sensitive literal substring match). |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#direction DataCloudflareZeroTrustCwsRegoModule#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by Rego module name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#name DataCloudflareZeroTrustCwsRegoModule#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#order DataCloudflareZeroTrustCwsRegoModule#order}

---

##### `packagePath`<sup>Optional</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter.property.packagePath"></a>

```typescript
public readonly packagePath: string;
```

- *Type:* string

Filter by package path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_module#package_path DataCloudflareZeroTrustCwsRegoModule#package_path}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference <a name="DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsRegoModule } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetPackagePath">resetPackagePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetPackagePath` <a name="resetPackagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.resetPackagePath"></a>

```typescript
public resetPackagePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePathInput">packagePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePath">packagePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `packagePathInput`<sup>Optional</sup> <a name="packagePathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePathInput"></a>

```typescript
public readonly packagePathInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `packagePath`<sup>Required</sup> <a name="packagePath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.packagePath"></a>

```typescript
public readonly packagePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustCwsRegoModuleFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoModule.DataCloudflareZeroTrustCwsRegoModuleFilter">DataCloudflareZeroTrustCwsRegoModuleFilter</a>

---



