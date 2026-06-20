# `dataCloudflareDlsPrefixBindings` Submodule <a name="`dataCloudflareDlsPrefixBindings` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareDlsPrefixBindings <a name="DataCloudflareDlsPrefixBindings" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_bindings cloudflare_dls_prefix_bindings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

new dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings(scope: Construct, id: string, config: DataCloudflareDlsPrefixBindingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig">DataCloudflareDlsPrefixBindingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig">DataCloudflareDlsPrefixBindingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.resetMaxItems">resetMaxItems</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.resetMaxItems"></a>

```typescript
public resetMaxItems(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareDlsPrefixBindings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isConstruct"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformElement"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformDataSource"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareDlsPrefixBindings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareDlsPrefixBindings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareDlsPrefixBindings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_bindings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareDlsPrefixBindings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList">DataCloudflareDlsPrefixBindingsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.maxItemsInput">maxItemsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.maxItems">maxItems</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.result"></a>

```typescript
public readonly result: DataCloudflareDlsPrefixBindingsResultList;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList">DataCloudflareDlsPrefixBindingsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.maxItemsInput"></a>

```typescript
public readonly maxItemsInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareDlsPrefixBindingsConfig <a name="DataCloudflareDlsPrefixBindingsConfig" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

const dataCloudflareDlsPrefixBindingsConfig: dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.accountId">accountId</a></code> | <code>string</code> | Identifier of a Cloudflare account. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.maxItems">maxItems</a></code> | <code>number</code> | Max items to fetch, default: 1000. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Identifier of a Cloudflare account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_bindings#account_id DataCloudflareDlsPrefixBindings#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsConfig.property.maxItems"></a>

```typescript
public readonly maxItems: number;
```

- *Type:* number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/dls_prefix_bindings#max_items DataCloudflareDlsPrefixBindings#max_items}

---

### DataCloudflareDlsPrefixBindingsResult <a name="DataCloudflareDlsPrefixBindingsResult" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResult.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

const dataCloudflareDlsPrefixBindingsResult: dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResult = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareDlsPrefixBindingsResultList <a name="DataCloudflareDlsPrefixBindingsResultList" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

new dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.get"></a>

```typescript
public get(index: number): DataCloudflareDlsPrefixBindingsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataCloudflareDlsPrefixBindingsResultOutputReference <a name="DataCloudflareDlsPrefixBindingsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer"></a>

```typescript
import { dataCloudflareDlsPrefixBindings } from '@cdktn/provider-cloudflare'

new dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.prefixId">prefixId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.regionKey">regionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResult">DataCloudflareDlsPrefixBindingsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefixId`<sup>Required</sup> <a name="prefixId" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.prefixId"></a>

```typescript
public readonly prefixId: string;
```

- *Type:* string

---

##### `regionKey`<sup>Required</sup> <a name="regionKey" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.regionKey"></a>

```typescript
public readonly regionKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataCloudflareDlsPrefixBindingsResult;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareDlsPrefixBindings.DataCloudflareDlsPrefixBindingsResult">DataCloudflareDlsPrefixBindingsResult</a>

---



