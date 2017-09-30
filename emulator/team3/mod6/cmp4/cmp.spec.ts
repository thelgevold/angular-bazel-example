
import { Cmp4364Component } from './cmp';
describe('Cmp4364Component', () => {
  it('should add', () => {
    expect(new Cmp4364Component().add4364(1)).toBe(4365);
  });
});