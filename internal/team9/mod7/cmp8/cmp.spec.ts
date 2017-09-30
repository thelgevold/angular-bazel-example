
import { Cmp8978Component } from './cmp';
describe('Cmp8978Component', () => {
  it('should add', () => {
    expect(new Cmp8978Component().add8978(1)).toBe(8979);
  });
});