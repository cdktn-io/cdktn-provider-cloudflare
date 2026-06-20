# `dataCloudflareDlsPrefixBinding` Submodule <a name="`dataCloudflareDlsPrefixBinding` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDlsPrefixBinding <a name="DataCloudflareDlsPrefixBinding" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_binding cloudflare_dls_prefix_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBinding } from '@cdktn/provider-cloudflare'

new dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding(scope: Construct, id: string, config: DataCloudflareDlsPrefixBindingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig">DataCloudflareDlsPrefixBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig">DataCloudflareDlsPrefixBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDlsPrefixBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isConstruct"></a>

```typescript
import { dataCloudflareDlsPrefixBinding } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformElement"></a>

```typescript
import { dataCloudflareDlsPrefixBinding } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDlsPrefixBinding } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport"></a>

```typescript
import { dataCloudflareDlsPrefixBinding } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareDlsPrefixBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDlsPrefixBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDlsPrefixBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDlsPrefixBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.prefixId">prefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.regionKey">regionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.bindingIdInput">bindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.bindingId">bindingId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefixId`<sup>Required</sup> <a name="prefixId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.prefixId"></a>

```typescript
public readonly prefixId: string;
```

- *Type:* string

---

##### `regionKey`<sup>Required</sup> <a name="regionKey" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.regionKey"></a>

```typescript
public readonly regionKey: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bindingIdInput`<sup>Optional</sup> <a name="bindingIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.bindingIdInput"></a>

```typescript
public readonly bindingIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.bindingId"></a>

```typescript
public readonly bindingId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBinding.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDlsPrefixBindingConfig <a name="DataCloudflareDlsPrefixBindingConfig" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBinding } from '@cdktn/provider-cloudflare'

const dataCloudflareDlsPrefixBindingConfig: dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.bindingId">bindingId</a></code> | <code>string</code> | Unique identifier for the prefix binding. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_binding#account_id DataCloudflareDlsPrefixBinding#account_id}

---

##### `bindingId`<sup>Required</sup> <a name="bindingId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBinding.DataCloudflareDlsPrefixBindingConfig.property.bindingId"></a>

```typescript
public readonly bindingId: string;
```

- *Type:* string

Unique identifier for the prefix binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_binding#binding_id DataCloudflareDlsPrefixBinding#binding_id}

---



