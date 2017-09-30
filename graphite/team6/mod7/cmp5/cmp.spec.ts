
import { Cmp6675Component } from './cmp';
describe('Cmp6675Component', () => {
  it('should add', () => {
    expect(new Cmp6675Component().add6675(1)).toBe(6676);
  });
});