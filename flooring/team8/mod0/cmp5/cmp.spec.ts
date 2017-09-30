
import { Cmp5805Component } from './cmp';
describe('Cmp5805Component', () => {
  it('should add', () => {
    expect(new Cmp5805Component().add5805(1)).toBe(5806);
  });
});