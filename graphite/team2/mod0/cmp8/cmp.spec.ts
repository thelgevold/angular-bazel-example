
import { Cmp6208Component } from './cmp';
describe('Cmp6208Component', () => {
  it('should add', () => {
    expect(new Cmp6208Component().add6208(1)).toBe(6209);
  });
});