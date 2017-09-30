
import { Cmp6820Component } from './cmp';
describe('Cmp6820Component', () => {
  it('should add', () => {
    expect(new Cmp6820Component().add6820(1)).toBe(6821);
  });
});