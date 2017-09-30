
import { Cmp6610Component } from './cmp';
describe('Cmp6610Component', () => {
  it('should add', () => {
    expect(new Cmp6610Component().add6610(1)).toBe(6611);
  });
});