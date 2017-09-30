
import { Cmp4628Component } from './cmp';
describe('Cmp4628Component', () => {
  it('should add', () => {
    expect(new Cmp4628Component().add4628(1)).toBe(4629);
  });
});