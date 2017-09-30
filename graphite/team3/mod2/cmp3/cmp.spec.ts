
import { Cmp6323Component } from './cmp';
describe('Cmp6323Component', () => {
  it('should add', () => {
    expect(new Cmp6323Component().add6323(1)).toBe(6324);
  });
});