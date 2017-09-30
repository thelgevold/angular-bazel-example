
import { Cmp8552Component } from './cmp';
describe('Cmp8552Component', () => {
  it('should add', () => {
    expect(new Cmp8552Component().add8552(1)).toBe(8553);
  });
});