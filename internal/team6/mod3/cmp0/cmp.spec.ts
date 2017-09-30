
import { Cmp8630Component } from './cmp';
describe('Cmp8630Component', () => {
  it('should add', () => {
    expect(new Cmp8630Component().add8630(1)).toBe(8631);
  });
});