# `dataCloudflareWorkersCustomDomain` Submodule <a name="`dataCloudflareWorkersCustomDomain` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareWorkersCustomDomain <a name="DataCloudflareWorkersCustomDomain" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain cloudflare_workers_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain(scope: Construct, id: string, config: DataCloudflareWorkersCustomDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig">DataCloudflareWorkersCustomDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig">DataCloudflareWorkersCustomDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter"></a>

```typescript
public putFilter(value: DataCloudflareWorkersCustomDomainFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

---

##### `resetDomainId` <a name="resetDomainId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.resetFilter"></a>

```typescript
public resetFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareWorkersCustomDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareWorkersCustomDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareWorkersCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareWorkersCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference">DataCloudflareWorkersCustomDomainFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filter"></a>

```typescript
public readonly filter: DataCloudflareWorkersCustomDomainFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference">DataCloudflareWorkersCustomDomainFilterOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataCloudflareWorkersCustomDomainFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareWorkersCustomDomainConfig <a name="DataCloudflareWorkersCustomDomainConfig" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.Initializer"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersCustomDomainConfig: dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifer of the account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.domainId">domainId</a></code> | <code>string</code> | Identifer of the Worker Domain. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifer of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#account_id DataCloudflareWorkersCustomDomain#account_id}

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Identifer of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#domain_id DataCloudflareWorkersCustomDomain#domain_id}

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainConfig.property.filter"></a>

```typescript
public readonly filter: DataCloudflareWorkersCustomDomainFilter;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#filter DataCloudflareWorkersCustomDomain#filter}.

---

### DataCloudflareWorkersCustomDomainFilter <a name="DataCloudflareWorkersCustomDomainFilter" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.Initializer"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

const dataCloudflareWorkersCustomDomainFilter: dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.environment">environment</a></code> | <code>string</code> | Worker environment associated with the zone and hostname. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.hostname">hostname</a></code> | <code>string</code> | Hostname of the Worker Domain. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.service">service</a></code> | <code>string</code> | Worker service associated with the zone and hostname. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier of the zone. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneName">zoneName</a></code> | <code>string</code> | Name of the zone. |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

Worker environment associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#environment DataCloudflareWorkersCustomDomain#environment}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Hostname of the Worker Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#hostname DataCloudflareWorkersCustomDomain#hostname}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Worker service associated with the zone and hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#service DataCloudflareWorkersCustomDomain#service}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#zone_id DataCloudflareWorkersCustomDomain#zone_id}

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/workers_custom_domain#zone_name DataCloudflareWorkersCustomDomain#zone_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareWorkersCustomDomainFilterOutputReference <a name="DataCloudflareWorkersCustomDomainFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer"></a>

```typescript
import { dataCloudflareWorkersCustomDomain } from '@cdktn/provider-cloudflare'

new dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneId">resetZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneName">resetZoneName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneId"></a>

```typescript
public resetZoneId(): void
```

##### `resetZoneName` <a name="resetZoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.resetZoneName"></a>

```typescript
public resetZoneName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneNameInput">zoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneName">zoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `zoneNameInput`<sup>Optional</sup> <a name="zoneNameInput" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneNameInput"></a>

```typescript
public readonly zoneNameInput: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataCloudflareWorkersCustomDomainFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.dataCloudflareWorkersCustomDomain.DataCloudflareWorkersCustomDomainFilter">DataCloudflareWorkersCustomDomainFilter</a>

---



