
import { Cmp6581Component } from './cmp';
describe('Cmp6581Component', () => {
  it('should add', () => {
    expect(new Cmp6581Component().add6581(1)).toBe(6582);
  });
});