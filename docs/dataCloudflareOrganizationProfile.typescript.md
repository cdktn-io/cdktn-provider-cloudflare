# `dataCloudflareOrganizationProfile` Submodule <a name="`dataCloudflareOrganizationProfile` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareOrganizationProfileA <a name="DataCloudflareOrganizationProfileA" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/organization_profile cloudflare_organization_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer"></a>

```typescript
import { dataCloudflareOrganizationProfile } from '@cdktn/provider-cloudflare'

new dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA(scope: Construct, id: string, config: DataCloudflareOrganizationProfileAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig">DataCloudflareOrganizationProfileAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig">DataCloudflareOrganizationProfileAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareOrganizationProfileA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isConstruct"></a>

```typescript
import { dataCloudflareOrganizationProfile } from '@cdktn/provider-cloudflare'

dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformElement"></a>

```typescript
import { dataCloudflareOrganizationProfile } from '@cdktn/provider-cloudflare'

dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformDataSource"></a>

```typescript
import { dataCloudflareOrganizationProfile } from '@cdktn/provider-cloudflare'

dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport"></a>

```typescript
import { dataCloudflareOrganizationProfile } from '@cdktn/provider-cloudflare'

dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCloudflareOrganizationProfileA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareOrganizationProfileA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareOrganizationProfileA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/organization_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareOrganizationProfileA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessAddress">businessAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessEmail">businessEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessName">businessName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessPhone">businessPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.externalMetadata">externalMetadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `businessAddress`<sup>Required</sup> <a name="businessAddress" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessAddress"></a>

```typescript
public readonly businessAddress: string;
```

- *Type:* string

---

##### `businessEmail`<sup>Required</sup> <a name="businessEmail" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessEmail"></a>

```typescript
public readonly businessEmail: string;
```

- *Type:* string

---

##### `businessName`<sup>Required</sup> <a name="businessName" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessName"></a>

```typescript
public readonly businessName: string;
```

- *Type:* string

---

##### `businessPhone`<sup>Required</sup> <a name="businessPhone" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.businessPhone"></a>

```typescript
public readonly businessPhone: string;
```

- *Type:* string

---

##### `externalMetadata`<sup>Required</sup> <a name="externalMetadata" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.externalMetadata"></a>

```typescript
public readonly externalMetadata: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareOrganizationProfileAConfig <a name="DataCloudflareOrganizationProfileAConfig" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.Initializer"></a>

```typescript
import { dataCloudflareOrganizationProfile } from '@cdktn/provider-cloudflare'

const dataCloudflareOrganizationProfileAConfig: dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.organizationId">organizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/organization_profile#organization_id DataCloudflareOrganizationProfileA#organization_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-cloudflare.dataCloudflareOrganizationProfile.DataCloudflareOrganizationProfileAConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/data-sources/organization_profile#organization_id DataCloudflareOrganizationProfileA#organization_id}.

---



