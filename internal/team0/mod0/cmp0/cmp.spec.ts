
import { Cmp8000Component } from './cmp';
describe('Cmp8000Component', () => {
  it('should add', () => {
    expect(new Cmp8000Component().add8000(1)).toBe(8001);
  });
});