
import { Cmp6908Component } from './cmp';
describe('Cmp6908Component', () => {
  it('should add', () => {
    expect(new Cmp6908Component().add6908(1)).toBe(6909);
  });
});