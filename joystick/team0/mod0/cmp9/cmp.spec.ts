
import { Cmp9009Component } from './cmp';
describe('Cmp9009Component', () => {
  it('should add', () => {
    expect(new Cmp9009Component().add9009(1)).toBe(9010);
  });
});