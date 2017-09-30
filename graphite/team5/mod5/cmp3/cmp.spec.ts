
import { Cmp6553Component } from './cmp';
describe('Cmp6553Component', () => {
  it('should add', () => {
    expect(new Cmp6553Component().add6553(1)).toBe(6554);
  });
});