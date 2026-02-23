# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktn/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktn/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

new botManagement.BotManagement(scope: Construct, id: string, config: BotManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection">resetAiBotsProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">resetAutoUpdateModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetBmCookieEnabled">resetBmCookieEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetCfRobotsVariant">resetCfRobotsVariant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetCrawlerProtection">resetCrawlerProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetEnableJs">resetEnableJs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetFightMode">resetFightMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetIsRobotsTxtManaged">resetIsRobotsTxtManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">resetOptimizeWordpress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">resetSbfmDefinitelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">resetSbfmLikelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">resetSbfmStaticResourceProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">resetSbfmVerifiedBots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">resetSuppressSessionScore</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.botManagement.BotManagement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.botManagement.BotManagement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.botManagement.BotManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAiBotsProtection` <a name="resetAiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection"></a>

```typescript
public resetAiBotsProtection(): void
```

##### `resetAutoUpdateModel` <a name="resetAutoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```typescript
public resetAutoUpdateModel(): void
```

##### `resetBmCookieEnabled` <a name="resetBmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetBmCookieEnabled"></a>

```typescript
public resetBmCookieEnabled(): void
```

##### `resetCfRobotsVariant` <a name="resetCfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetCfRobotsVariant"></a>

```typescript
public resetCfRobotsVariant(): void
```

##### `resetCrawlerProtection` <a name="resetCrawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetCrawlerProtection"></a>

```typescript
public resetCrawlerProtection(): void
```

##### `resetEnableJs` <a name="resetEnableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```typescript
public resetEnableJs(): void
```

##### `resetFightMode` <a name="resetFightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```typescript
public resetFightMode(): void
```

##### `resetIsRobotsTxtManaged` <a name="resetIsRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetIsRobotsTxtManaged"></a>

```typescript
public resetIsRobotsTxtManaged(): void
```

##### `resetOptimizeWordpress` <a name="resetOptimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```typescript
public resetOptimizeWordpress(): void
```

##### `resetSbfmDefinitelyAutomated` <a name="resetSbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```typescript
public resetSbfmDefinitelyAutomated(): void
```

##### `resetSbfmLikelyAutomated` <a name="resetSbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```typescript
public resetSbfmLikelyAutomated(): void
```

##### `resetSbfmStaticResourceProtection` <a name="resetSbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```typescript
public resetSbfmStaticResourceProtection(): void
```

##### `resetSbfmVerifiedBots` <a name="resetSbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```typescript
public resetSbfmVerifiedBots(): void
```

##### `resetSuppressSessionScore` <a name="resetSuppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```typescript
public resetSuppressSessionScore(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BotManagement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

botManagement.BotManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

botManagement.BotManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

botManagement.BotManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

botManagement.BotManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BotManagement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BotManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration">staleZoneConfiguration</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">usingLatestModel</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput">aiBotsProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">autoUpdateModelInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabledInput">bmCookieEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariantInput">cfRobotsVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtectionInput">crawlerProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">enableJsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">fightModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManagedInput">isRobotsTxtManagedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">optimizeWordpressInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">sbfmDefinitelyAutomatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">sbfmLikelyAutomatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">sbfmStaticResourceProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">sbfmVerifiedBotsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">suppressSessionScoreInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection">aiBotsProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">autoUpdateModel</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabled">bmCookieEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariant">cfRobotsVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtection">crawlerProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJs">enableJs</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightMode">fightMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManaged">isRobotsTxtManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">optimizeWordpress</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">suppressSessionScore</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `staleZoneConfiguration`<sup>Required</sup> <a name="staleZoneConfiguration" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration"></a>

```typescript
public readonly staleZoneConfiguration: BotManagementStaleZoneConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a>

---

##### `usingLatestModel`<sup>Required</sup> <a name="usingLatestModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```typescript
public readonly usingLatestModel: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `aiBotsProtectionInput`<sup>Optional</sup> <a name="aiBotsProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput"></a>

```typescript
public readonly aiBotsProtectionInput: string;
```

- *Type:* string

---

##### `autoUpdateModelInput`<sup>Optional</sup> <a name="autoUpdateModelInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```typescript
public readonly autoUpdateModelInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bmCookieEnabledInput`<sup>Optional</sup> <a name="bmCookieEnabledInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabledInput"></a>

```typescript
public readonly bmCookieEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cfRobotsVariantInput`<sup>Optional</sup> <a name="cfRobotsVariantInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariantInput"></a>

```typescript
public readonly cfRobotsVariantInput: string;
```

- *Type:* string

---

##### `crawlerProtectionInput`<sup>Optional</sup> <a name="crawlerProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtectionInput"></a>

```typescript
public readonly crawlerProtectionInput: string;
```

- *Type:* string

---

##### `enableJsInput`<sup>Optional</sup> <a name="enableJsInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```typescript
public readonly enableJsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fightModeInput`<sup>Optional</sup> <a name="fightModeInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```typescript
public readonly fightModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRobotsTxtManagedInput`<sup>Optional</sup> <a name="isRobotsTxtManagedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManagedInput"></a>

```typescript
public readonly isRobotsTxtManagedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optimizeWordpressInput`<sup>Optional</sup> <a name="optimizeWordpressInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```typescript
public readonly optimizeWordpressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sbfmDefinitelyAutomatedInput`<sup>Optional</sup> <a name="sbfmDefinitelyAutomatedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```typescript
public readonly sbfmDefinitelyAutomatedInput: string;
```

- *Type:* string

---

##### `sbfmLikelyAutomatedInput`<sup>Optional</sup> <a name="sbfmLikelyAutomatedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```typescript
public readonly sbfmLikelyAutomatedInput: string;
```

- *Type:* string

---

##### `sbfmStaticResourceProtectionInput`<sup>Optional</sup> <a name="sbfmStaticResourceProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```typescript
public readonly sbfmStaticResourceProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sbfmVerifiedBotsInput`<sup>Optional</sup> <a name="sbfmVerifiedBotsInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```typescript
public readonly sbfmVerifiedBotsInput: string;
```

- *Type:* string

---

##### `suppressSessionScoreInput`<sup>Optional</sup> <a name="suppressSessionScoreInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```typescript
public readonly suppressSessionScoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `aiBotsProtection`<sup>Required</sup> <a name="aiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection"></a>

```typescript
public readonly aiBotsProtection: string;
```

- *Type:* string

---

##### `autoUpdateModel`<sup>Required</sup> <a name="autoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```typescript
public readonly autoUpdateModel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bmCookieEnabled`<sup>Required</sup> <a name="bmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabled"></a>

```typescript
public readonly bmCookieEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cfRobotsVariant`<sup>Required</sup> <a name="cfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariant"></a>

```typescript
public readonly cfRobotsVariant: string;
```

- *Type:* string

---

##### `crawlerProtection`<sup>Required</sup> <a name="crawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtection"></a>

```typescript
public readonly crawlerProtection: string;
```

- *Type:* string

---

##### `enableJs`<sup>Required</sup> <a name="enableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```typescript
public readonly enableJs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```typescript
public readonly fightMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isRobotsTxtManaged`<sup>Required</sup> <a name="isRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManaged"></a>

```typescript
public readonly isRobotsTxtManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```typescript
public readonly optimizeWordpress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```typescript
public readonly sbfmDefinitelyAutomated: string;
```

- *Type:* string

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```typescript
public readonly sbfmLikelyAutomated: string;
```

- *Type:* string

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```typescript
public readonly sbfmStaticResourceProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```typescript
public readonly sbfmVerifiedBots: string;
```

- *Type:* string

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```typescript
public readonly suppressSessionScore: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

const botManagementConfig: botManagement.BotManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection">aiBotsProtection</a></code> | <code>string</code> | Enable rule to block AI Scrapers and Crawlers. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">autoUpdateModel</a></code> | <code>boolean \| cdktn.IResolvable</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.bmCookieEnabled">bmCookieEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.cfRobotsVariant">cfRobotsVariant</a></code> | <code>string</code> | Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.crawlerProtection">crawlerProtection</a></code> | <code>string</code> | Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">enableJs</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">fightMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.isRobotsTxtManaged">isRobotsTxtManaged</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">optimizeWordpress</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">suppressSessionScore</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `aiBotsProtection`<sup>Optional</sup> <a name="aiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection"></a>

```typescript
public readonly aiBotsProtection: string;
```

- *Type:* string

Enable rule to block AI Scrapers and Crawlers.

Please note the value `only_on_ad_pages` is currently not available for Enterprise customers.
Available values: "block", "disabled", "only_on_ad_pages".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}

---

##### `autoUpdateModel`<sup>Optional</sup> <a name="autoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```typescript
public readonly autoUpdateModel: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `bmCookieEnabled`<sup>Optional</sup> <a name="bmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.bmCookieEnabled"></a>

```typescript
public readonly bmCookieEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}

---

##### `cfRobotsVariant`<sup>Optional</sup> <a name="cfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.cfRobotsVariant"></a>

```typescript
public readonly cfRobotsVariant: string;
```

- *Type:* string

Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}

---

##### `crawlerProtection`<sup>Optional</sup> <a name="crawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.crawlerProtection"></a>

```typescript
public readonly crawlerProtection: string;
```

- *Type:* string

Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}

---

##### `enableJs`<sup>Optional</sup> <a name="enableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```typescript
public readonly enableJs: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fightMode`<sup>Optional</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```typescript
public readonly fightMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `isRobotsTxtManaged`<sup>Optional</sup> <a name="isRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.isRobotsTxtManaged"></a>

```typescript
public readonly isRobotsTxtManaged: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}

---

##### `optimizeWordpress`<sup>Optional</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```typescript
public readonly optimizeWordpress: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfmDefinitelyAutomated`<sup>Optional</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```typescript
public readonly sbfmDefinitelyAutomated: string;
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfmLikelyAutomated`<sup>Optional</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```typescript
public readonly sbfmLikelyAutomated: string;
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfmStaticResourceProtection`<sup>Optional</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```typescript
public readonly sbfmStaticResourceProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection.
Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfmVerifiedBots`<sup>Optional</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```typescript
public readonly sbfmVerifiedBots: string;
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppressSessionScore`<sup>Optional</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```typescript
public readonly suppressSessionScore: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

### BotManagementStaleZoneConfiguration <a name="BotManagementStaleZoneConfiguration" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration.Initializer"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

const botManagementStaleZoneConfiguration: botManagement.BotManagementStaleZoneConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### BotManagementStaleZoneConfigurationOutputReference <a name="BotManagementStaleZoneConfigurationOutputReference" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```typescript
import { botManagement } from '@cdktn/provider-cloudflare'

new botManagement.BotManagementStaleZoneConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode">fightMode</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">optimizeWordpress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">suppressSessionScore</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```typescript
public readonly fightMode: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```typescript
public readonly optimizeWordpress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```typescript
public readonly sbfmDefinitelyAutomated: string;
```

- *Type:* string

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```typescript
public readonly sbfmLikelyAutomated: string;
```

- *Type:* string

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```typescript
public readonly sbfmStaticResourceProtection: string;
```

- *Type:* string

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```typescript
public readonly sbfmVerifiedBots: string;
```

- *Type:* string

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```typescript
public readonly suppressSessionScore: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BotManagementStaleZoneConfiguration;
```

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a>

---



