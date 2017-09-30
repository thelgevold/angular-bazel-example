
import { Cmp6595Component } from './cmp';
describe('Cmp6595Component', () => {
  it('should add', () => {
    expect(new Cmp6595Component().add6595(1)).toBe(6596);
  });
});