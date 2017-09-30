
import { Cmp9649Component } from './cmp';
describe('Cmp9649Component', () => {
  it('should add', () => {
    expect(new Cmp9649Component().add9649(1)).toBe(9650);
  });
});