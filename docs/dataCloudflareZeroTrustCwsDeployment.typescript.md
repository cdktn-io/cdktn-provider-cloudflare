# `dataCloudflareZeroTrustCwsDeployment` Submodule <a name="`dataCloudflareZeroTrustCwsDeployment` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsDeployment <a name="DataCloudflareZeroTrustCwsDeployment" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment(scope: Construct, id: string, config: DataCloudflareZeroTrustCwsDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig">DataCloudflareZeroTrustCwsDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig">DataCloudflareZeroTrustCwsDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustCwsDeploymentFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

---

##### `resetDeploymentId` <a name="resetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCwsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.basicAuthCredentialIds">basicAuthCredentialIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.defaultMode">defaultMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.domainAclId">domainAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference">DataCloudflareZeroTrustCwsDeploymentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.onErrorAction">onErrorAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.policySetIds">policySetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.regoRaiseError">regoRaiseError</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `basicAuthCredentialIds`<sup>Required</sup> <a name="basicAuthCredentialIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.basicAuthCredentialIds"></a>

```typescript
public readonly basicAuthCredentialIds: string[];
```

- *Type:* string[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.defaultMode"></a>

```typescript
public readonly defaultMode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainAclId`<sup>Required</sup> <a name="domainAclId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.domainAclId"></a>

```typescript
public readonly domainAclId: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsDeploymentFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference">DataCloudflareZeroTrustCwsDeploymentFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onErrorAction`<sup>Required</sup> <a name="onErrorAction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.onErrorAction"></a>

```typescript
public readonly onErrorAction: string;
```

- *Type:* string

---

##### `policySetIds`<sup>Required</sup> <a name="policySetIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.policySetIds"></a>

```typescript
public readonly policySetIds: string[];
```

- *Type:* string[]

---

##### `regoRaiseError`<sup>Required</sup> <a name="regoRaiseError" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.regoRaiseError"></a>

```typescript
public readonly regoRaiseError: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustCwsDeploymentFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsDeploymentConfig <a name="DataCloudflareZeroTrustCwsDeploymentConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsDeploymentConfig: dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.accountId">accountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | ID of the deployment to retrieve. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#filter DataCloudflareZeroTrustCwsDeployment#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#account_id DataCloudflareZeroTrustCwsDeployment#account_id}

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

ID of the deployment to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#deployment_id DataCloudflareZeroTrustCwsDeployment#deployment_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCwsDeploymentFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#filter DataCloudflareZeroTrustCwsDeployment#filter}.

---

### DataCloudflareZeroTrustCwsDeploymentFilter <a name="DataCloudflareZeroTrustCwsDeploymentFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCwsDeploymentFilter: dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.direction">direction</a></code> | <code>string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.name">name</a></code> | <code>string</code> | Filter by deployment name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.order">order</a></code> | <code>string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#direction DataCloudflareZeroTrustCwsDeployment#direction}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Filter by deployment name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#name DataCloudflareZeroTrustCwsDeployment#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_deployment#order DataCloudflareZeroTrustCwsDeployment#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsDeploymentFilterOutputReference <a name="DataCloudflareZeroTrustCwsDeploymentFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCwsDeployment } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustCwsDeploymentFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsDeployment.DataCloudflareZeroTrustCwsDeploymentFilter">DataCloudflareZeroTrustCwsDeploymentFilter</a>

---



