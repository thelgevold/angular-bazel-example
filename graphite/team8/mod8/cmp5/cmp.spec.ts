
import { Cmp6885Component } from './cmp';
describe('Cmp6885Component', () => {
  it('should add', () => {
    expect(new Cmp6885Component().add6885(1)).toBe(6886);
  });
});