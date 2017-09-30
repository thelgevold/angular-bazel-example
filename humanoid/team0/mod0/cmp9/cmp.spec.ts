
import { Cmp7009Component } from './cmp';
describe('Cmp7009Component', () => {
  it('should add', () => {
    expect(new Cmp7009Component().add7009(1)).toBe(7010);
  });
});