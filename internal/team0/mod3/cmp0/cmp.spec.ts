
import { Cmp8030Component } from './cmp';
describe('Cmp8030Component', () => {
  it('should add', () => {
    expect(new Cmp8030Component().add8030(1)).toBe(8031);
  });
});