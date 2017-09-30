
import { Cmp8009Component } from './cmp';
describe('Cmp8009Component', () => {
  it('should add', () => {
    expect(new Cmp8009Component().add8009(1)).toBe(8010);
  });
});