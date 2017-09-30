
import { Cmp2602Component } from './cmp';
describe('Cmp2602Component', () => {
  it('should add', () => {
    expect(new Cmp2602Component().add2602(1)).toBe(2603);
  });
});