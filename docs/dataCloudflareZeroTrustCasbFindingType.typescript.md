# `dataCloudflareZeroTrustCasbFindingType` Submodule <a name="`dataCloudflareZeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbFindingType <a name="DataCloudflareZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType(scope: Construct, id: string, config: DataCloudflareZeroTrustCasbFindingTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig">DataCloudflareZeroTrustCasbFindingTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig">DataCloudflareZeroTrustCasbFindingTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId">resetFindingTypeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareZeroTrustCasbFindingTypeFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetFindingTypeId` <a name="resetFindingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.resetFindingTypeId"></a>

```typescript
public resetFindingTypeId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareZeroTrustCasbFindingType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass">assetClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor">assetVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds">integrationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount">matchCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined">quarantined</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput">findingTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId">findingTypeId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```typescript
public readonly appliesToAllIntegrations: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetClass"></a>

```typescript
public readonly assetClass: string;
```

- *Type:* string

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.assetVendor"></a>

```typescript
public readonly assetVendor: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.category"></a>

```typescript
public readonly category: DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference">DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference">DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationIds`<sup>Required</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.integrationIds"></a>

```typescript
public readonly integrationIds: string[];
```

- *Type:* string[]

---

##### `matchCount`<sup>Required</sup> <a name="matchCount" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.matchCount"></a>

```typescript
public readonly matchCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.quarantined"></a>

```typescript
public readonly quarantined: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareZeroTrustCasbFindingTypeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---

##### `findingTypeIdInput`<sup>Optional</sup> <a name="findingTypeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeIdInput"></a>

```typescript
public readonly findingTypeIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `findingTypeId`<sup>Required</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.findingTypeId"></a>

```typescript
public readonly findingTypeId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategory <a name="DataCloudflareZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbFindingTypeCategory: dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory = { ... }
```


### DataCloudflareZeroTrustCasbFindingTypeConfig <a name="DataCloudflareZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbFindingTypeConfig: dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId">findingTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#account_id DataCloudflareZeroTrustCasbFindingType#account_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareZeroTrustCasbFindingTypeFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#filter DataCloudflareZeroTrustCasbFindingType#filter}.

---

##### `findingTypeId`<sup>Optional</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeConfig.property.findingTypeId"></a>

```typescript
public readonly findingTypeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#finding_type_id DataCloudflareZeroTrustCasbFindingType#finding_type_id}.

---

### DataCloudflareZeroTrustCasbFindingTypeFilter <a name="DataCloudflareZeroTrustCasbFindingTypeFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

const dataCloudflareZeroTrustCasbFindingTypeFilter: dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction">direction</a></code> | <code>string</code> | Sort direction for the primary field. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt">maxUpdatedAt</a></code> | <code>string</code> | Return only finding types updated at or before this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt">minUpdatedAt</a></code> | <code>string</code> | Return only finding types updated at or after this RFC 3339 timestamp (inclusive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order">order</a></code> | <code>string</code> | Field to sort by (case-insensitive). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins">origins</a></code> | <code>string[]</code> | Filter finding types by origin. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined">quarantined</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search">search</a></code> | <code>string</code> | Filter finding types by name or ID (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities">severities</a></code> | <code>string[]</code> | Filter finding types by severity. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types">types</a></code> | <code>string[]</code> | Filter finding types by category type. Supports multiple comma-separated, case-insensitive values. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors">vendors</a></code> | <code>string[]</code> | Filter finding types by vendor. |

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Sort direction for the primary field.

Defaults to 'desc'.
Ties are resolved by case-insensitive name, then ID, both ascending regardless of direction.
Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#direction DataCloudflareZeroTrustCasbFindingType#direction}

---

##### `maxUpdatedAt`<sup>Optional</sup> <a name="maxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.maxUpdatedAt"></a>

```typescript
public readonly maxUpdatedAt: string;
```

- *Type:* string

Return only finding types updated at or before this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#max_updated_at DataCloudflareZeroTrustCasbFindingType#max_updated_at}

---

##### `minUpdatedAt`<sup>Optional</sup> <a name="minUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.minUpdatedAt"></a>

```typescript
public readonly minUpdatedAt: string;
```

- *Type:* string

Return only finding types updated at or after this RFC 3339 timestamp (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#min_updated_at DataCloudflareZeroTrustCasbFindingType#min_updated_at}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

Field to sort by (case-insensitive).

Defaults to 'created'.
Name and vendor sorting is case-insensitive; vendor uses friendly provider names.
Ascending order: type Content then Posture; origin custom then system;
severity Low, Medium, High, Critical.
Available values: "created", "updated", "match_count", "name", "vendor", "type", "origin", "severity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#order DataCloudflareZeroTrustCasbFindingType#order}

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

Filter finding types by origin. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#origins DataCloudflareZeroTrustCasbFindingType#origins}

---

##### `quarantined`<sup>Optional</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.quarantined"></a>

```typescript
public readonly quarantined: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, return only quarantined finding types; when false, return only non-quarantined finding types. Omit to return both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#quarantined DataCloudflareZeroTrustCasbFindingType#quarantined}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

Filter finding types by name or ID (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#search DataCloudflareZeroTrustCasbFindingType#search}

---

##### `severities`<sup>Optional</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

Filter finding types by severity. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#severities DataCloudflareZeroTrustCasbFindingType#severities}

---

##### `types`<sup>Optional</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

Filter finding types by category type. Supports multiple comma-separated, case-insensitive values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#types DataCloudflareZeroTrustCasbFindingType#types}

---

##### `vendors`<sup>Optional</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter.property.vendors"></a>

```typescript
public readonly vendors: string[];
```

- *Type:* string[]

Filter finding types by vendor.

Supports multiple comma-separated values. Each value may be either the vendor enum (GOOGLE_WORKSPACE) or the friendly name returned by the read routes (Google Workspace).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_casb_finding_type#vendors DataCloudflareZeroTrustCasbFindingType#vendors}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">observation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product">product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```typescript
public readonly observation: string;
```

- *Type:* string

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```typescript
public readonly product: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareZeroTrustCasbFindingTypeCategory;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeCategory">DataCloudflareZeroTrustCasbFindingTypeCategory</a>

---


### DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference <a name="DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareZeroTrustCasbFindingType } from '@cdktn/provider-cloudflare'

new dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt">resetMaxUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt">resetMinUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins">resetOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined">resetQuarantined</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities">resetSeverities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes">resetTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors">resetVendors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetMaxUpdatedAt` <a name="resetMaxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMaxUpdatedAt"></a>

```typescript
public resetMaxUpdatedAt(): void
```

##### `resetMinUpdatedAt` <a name="resetMinUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetMinUpdatedAt"></a>

```typescript
public resetMinUpdatedAt(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetOrigins` <a name="resetOrigins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetOrigins"></a>

```typescript
public resetOrigins(): void
```

##### `resetQuarantined` <a name="resetQuarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetQuarantined"></a>

```typescript
public resetQuarantined(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSeverities` <a name="resetSeverities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetSeverities"></a>

```typescript
public resetSeverities(): void
```

##### `resetTypes` <a name="resetTypes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetTypes"></a>

```typescript
public resetTypes(): void
```

##### `resetVendors` <a name="resetVendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.resetVendors"></a>

```typescript
public resetVendors(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput">maxUpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput">minUpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput">orderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput">originsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput">quarantinedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput">searchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput">severitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput">typesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput">vendorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt">maxUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt">minUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order">order</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins">origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined">quarantined</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search">search</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities">severities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types">types</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors">vendors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `maxUpdatedAtInput`<sup>Optional</sup> <a name="maxUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAtInput"></a>

```typescript
public readonly maxUpdatedAtInput: string;
```

- *Type:* string

---

##### `minUpdatedAtInput`<sup>Optional</sup> <a name="minUpdatedAtInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAtInput"></a>

```typescript
public readonly minUpdatedAtInput: string;
```

- *Type:* string

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: string;
```

- *Type:* string

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.originsInput"></a>

```typescript
public readonly originsInput: string[];
```

- *Type:* string[]

---

##### `quarantinedInput`<sup>Optional</sup> <a name="quarantinedInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantinedInput"></a>

```typescript
public readonly quarantinedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: string;
```

- *Type:* string

---

##### `severitiesInput`<sup>Optional</sup> <a name="severitiesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severitiesInput"></a>

```typescript
public readonly severitiesInput: string[];
```

- *Type:* string[]

---

##### `typesInput`<sup>Optional</sup> <a name="typesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.typesInput"></a>

```typescript
public readonly typesInput: string[];
```

- *Type:* string[]

---

##### `vendorsInput`<sup>Optional</sup> <a name="vendorsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendorsInput"></a>

```typescript
public readonly vendorsInput: string[];
```

- *Type:* string[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `maxUpdatedAt`<sup>Required</sup> <a name="maxUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.maxUpdatedAt"></a>

```typescript
public readonly maxUpdatedAt: string;
```

- *Type:* string

---

##### `minUpdatedAt`<sup>Required</sup> <a name="minUpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.minUpdatedAt"></a>

```typescript
public readonly minUpdatedAt: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.order"></a>

```typescript
public readonly order: string;
```

- *Type:* string

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.origins"></a>

```typescript
public readonly origins: string[];
```

- *Type:* string[]

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.quarantined"></a>

```typescript
public readonly quarantined: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.search"></a>

```typescript
public readonly search: string;
```

- *Type:* string

---

##### `severities`<sup>Required</sup> <a name="severities" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.severities"></a>

```typescript
public readonly severities: string[];
```

- *Type:* string[]

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.types"></a>

```typescript
public readonly types: string[];
```

- *Type:* string[]

---

##### `vendors`<sup>Required</sup> <a name="vendors" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.vendors"></a>

```typescript
public readonly vendors: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareZeroTrustCasbFindingTypeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbFindingType.DataCloudflareZeroTrustCasbFindingTypeFilter">DataCloudflareZeroTrustCasbFindingTypeFilter</a>

---



