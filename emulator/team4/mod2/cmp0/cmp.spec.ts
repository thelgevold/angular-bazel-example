
import { Cmp4420Component } from './cmp';
describe('Cmp4420Component', () => {
  it('should add', () => {
    expect(new Cmp4420Component().add4420(1)).toBe(4421);
  });
});