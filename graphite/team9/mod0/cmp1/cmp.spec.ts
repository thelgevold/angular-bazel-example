
import { Cmp6901Component } from './cmp';
describe('Cmp6901Component', () => {
  it('should add', () => {
    expect(new Cmp6901Component().add6901(1)).toBe(6902);
  });
});