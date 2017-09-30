
import { Cmp6233Component } from './cmp';
describe('Cmp6233Component', () => {
  it('should add', () => {
    expect(new Cmp6233Component().add6233(1)).toBe(6234);
  });
});