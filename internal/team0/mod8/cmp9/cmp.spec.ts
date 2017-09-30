
import { Cmp8089Component } from './cmp';
describe('Cmp8089Component', () => {
  it('should add', () => {
    expect(new Cmp8089Component().add8089(1)).toBe(8090);
  });
});