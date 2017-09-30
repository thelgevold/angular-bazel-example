
import { Cmp7114Component } from './cmp';
describe('Cmp7114Component', () => {
  it('should add', () => {
    expect(new Cmp7114Component().add7114(1)).toBe(7115);
  });
});