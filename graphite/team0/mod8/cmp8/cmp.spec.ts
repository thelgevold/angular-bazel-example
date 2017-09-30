
import { Cmp6088Component } from './cmp';
describe('Cmp6088Component', () => {
  it('should add', () => {
    expect(new Cmp6088Component().add6088(1)).toBe(6089);
  });
});