
import { Cmp8294Component } from './cmp';
describe('Cmp8294Component', () => {
  it('should add', () => {
    expect(new Cmp8294Component().add8294(1)).toBe(8295);
  });
});