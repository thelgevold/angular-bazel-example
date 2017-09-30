
import { Cmp6720Component } from './cmp';
describe('Cmp6720Component', () => {
  it('should add', () => {
    expect(new Cmp6720Component().add6720(1)).toBe(6721);
  });
});