# `dataCloudflareZeroTrustAccessServiceToken` Submodule <a name="`dataCloudflareZeroTrustAccessServiceToken` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessServiceToken <a name="DataCloudflareZeroTrustAccessServiceToken" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token cloudflare_zero_trust_access_service_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken(scope: Construct, id: string, config?: DataCloudflareZeroTrustAccessServiceTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig">DataCloudflareZeroTrustAccessServiceTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig">DataCloudflareZeroTrustAccessServiceTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetServiceTokenId">resetServiceTokenId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustAccessServiceTokenFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetServiceTokenId` <a name="resetServiceTokenId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetServiceTokenId"></a>

```typescript
public resetServiceTokenId(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustAccessServiceToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustAccessServiceToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustAccessServiceToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustAccessServiceToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessServiceToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference">DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenIdInput">serviceTokenIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenId">serviceTokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference">DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustAccessServiceTokenFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a>

---

##### `serviceTokenIdInput`<sup>Optional</sup> <a name="serviceTokenIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenIdInput"></a>

```typescript
public readonly serviceTokenIdInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `serviceTokenId`<sup>Required</sup> <a name="serviceTokenId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.serviceTokenId"></a>

```typescript
public readonly serviceTokenId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessServiceTokenConfig <a name="DataCloudflareZeroTrustAccessServiceTokenConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustAccessServiceTokenConfig: dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.accountId">accountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#filter DataCloudflareZeroTrustAccessServiceToken#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.serviceTokenId">serviceTokenId</a></code> | <code>string</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.zoneId">zoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#account_id DataCloudflareZeroTrustAccessServiceToken#account_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustAccessServiceTokenFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#filter DataCloudflareZeroTrustAccessServiceToken#filter}.

---

##### `serviceTokenId`<sup>Optional</sup> <a name="serviceTokenId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.serviceTokenId"></a>

```typescript
public readonly serviceTokenId: string;
```

- *Type:* string

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#service_token_id DataCloudflareZeroTrustAccessServiceToken#service_token_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#zone_id DataCloudflareZeroTrustAccessServiceToken#zone_id}

---

### DataCloudflareZeroTrustAccessServiceTokenFilter <a name="DataCloudflareZeroTrustAccessServiceTokenFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustAccessServiceTokenFilter: dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.name">name</a></code> | <code>string</code> | The name of the service token. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.search">search</a></code> | <code>string</code> | Search for service tokens by other listed query parameters. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#name DataCloudflareZeroTrustAccessServiceToken#name}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Search for service tokens by other listed query parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/zero_trust_access_service_token#search DataCloudflareZeroTrustAccessServiceToken#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference <a name="DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustAccessServiceToken } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustAccessServiceTokenFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustAccessServiceToken.DataCloudflareZeroTrustAccessServiceTokenFilter">DataCloudflareZeroTrustAccessServiceTokenFilter</a>

---



